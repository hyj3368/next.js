"use client";

const Page = () => {
  const test = () => {
    alert("다까먹음 ㅎㅎ");
  };
  const test2 = () => {
    console.log("수업언제끝나!");
  };

  return (
    <>
      <button onClick={test}>0</button>
      <button onClick={test2}>수업</button>
    </>
  );
};

export default Page;
