/* eslint-disable react/prop-types */
import { useEffect } from "react";

function LeetcodeComponent({ username }) {
  useEffect(() => {
    fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, [username]);

  return <div>Leetcode</div>;
}

export default LeetcodeComponent;
