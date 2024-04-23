const updateProgressData = (newProgress, prevProgressData) => {
    return {
      ...prevProgressData,
      ...newProgress,
    };
  };

  const fetchData = async (url, requestBody, processDataCallback) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let responseData = "";

      // Object to store the progress value for each phone number
      let progressMap = {};

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        const textChunk = decoder.decode(value, { stream: true });
        responseData += textChunk;

        console.log("Received chunk:", textChunk);

        // Parse each chunk individually
        const parsedChunk = JSON.parse(textChunk.replace(/'/g, '"'));

        // Merge the parsed chunk with the existing progress map
        progressMap = { ...progressMap, ...parsedChunk };

        // Update the progress data
        setProgressData((prevProgressData) =>
          updateProgressData(progressMap, prevProgressData)
        );
      }

      console.log("Response data:", responseData);

      const parsedResponse = JSON.parse(responseData.replace(/'/g, '"'));
      console.log("Parsed response:", parsedResponse);

      processDataCallback(parsedResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
