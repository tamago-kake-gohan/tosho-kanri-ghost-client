import Button from "@/components/Button/Button";

type LendIdProps = {
  id: number;
  email: string;//借りているユーザーのメールアドレス
  name: string;//借りているユーザー名
  title: string;//借りている本のタイトル
};

const CreateReturnDemand = ({ email, name,title }:LendIdProps) => {
  function sendReturnDemand() {
    const link = document.createElement("a");
    link.href = `mailto:${email}?subject=返却のお願い&body=${encodeURIComponent(`${name}さん、こんにちは。「${title}」の返却をお願いします`)}`;
    link.click();
  }
  return (
    <div onClick={sendReturnDemand}>
      <Button text="送る" size="small" />
    </div>
  );
};

export default CreateReturnDemand;
