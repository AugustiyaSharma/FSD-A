import Marks from "./Marks";

const DisplayMarks = () => {
    const students=[
        {m1:87,m2:97,m3:95},
        {m1:27,m2:77,m3:35},
        {m1:57,m2:37,m3:85},
        {m1:67,m2:37,m3:35}
    ];
  return (
    <>
    <Marks m1={87} m2={85} m3={84} />
    </>
  );
};

export default DisplayMarks;