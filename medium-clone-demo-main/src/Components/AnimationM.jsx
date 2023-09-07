import React,{useState,useEffect} from "react";
const AnimationM = () => {

const n = 25;

  // Number of columns
  const m = 15;

  // Array which will be used to 
  // display the chessboard
  const [chessBoard, setChessBoard] = useState([]);

  useEffect(() => {

      const result = [];

      
      for (let i = 0; i < 10; i++) {
          const row = Array.from({ length: m });
          result.push(row);
      }
      setChessBoard(result);
  }, []);

  return (
      <>
          {chessBoard.length > 0 &&
              chessBoard.map((row, rIndex) => {
                  return (
                      <div className="flex text-xl  mt-3 w-full" key={rIndex}>
                          {row.map((_, cIndex) => {
                              return (
                                 <>
                                 {rIndex == 0?  <div className="text-green-500">M</div>:  <span className="text-red-500 p-1">M</span>}
                               
                                 </>
                              );
                          })}
                      </div>
                  );
              })}
      </>
  );

};
export default AnimationM;