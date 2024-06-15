import GetData from "./GetData";
import SendDataAPI from "./SendDataAPI";

export const Score = ({ formData }) => {
  const { player1, player2 } = formData;
  console.log(`${formData.player1.name}:${formData.player1.status}`);
  console.log(`${formData.player2.name}:${formData.player2.status}`);
  return (
    <>
      <SendDataAPI player={formData.player1}></SendDataAPI>
      <SendDataAPI player={formData.player2}></SendDataAPI>
      <GetData/>
    </>
  );
};
