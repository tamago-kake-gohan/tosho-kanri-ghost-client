import axios from "@/components/utilAxios";
import Button from "@/components/Button/Button";

type LendIdProps = {
  id: number;
};

const CreateReturnDemand: React.FC<LendIdProps> = ({ id }) => {
  async function sendReturnDemand() {
    /*
    propsで借りている人間のメールアドレスを取得できるようにする
  */
    await axios
      .post("/api/v1/send_demand_letter", {
        lendId: id,
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log("エラー", error);
      });
  }
  return (
    <div onClick={sendReturnDemand}>
      <Button text="送る" size="small" />
    </div>
  );
};

export default CreateReturnDemand;
