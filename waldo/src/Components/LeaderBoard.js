import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "firebase/firestore";
import { Link } from "react-router-dom";

function LeaderBoard(props) {
  const [leaders, setLeaders] = useState([]);

  const leaderboard = firebase.firestore();
  // get leaders data
  useEffect(() => {
    const fetchLeaders = async () => {
      leaderboard
        .collection(props.gameLevel)
        .orderBy("seconds", "asc")
        .get()
        .then((querySnapshot) => {
          const results = [];
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            results.push(doc.data());
          });
          setLeaders(results);
        });
    };

    fetchLeaders();
  }, []);

  return (
    <div>
      <header>
        <Link to="/waldo" className="text-link">
          <div>Where´s waldo</div>
        </Link>
      </header>
      <div className="table-box">
        <table id="leaders">
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((item, index) => {
              const getSeconds = `0${item.seconds % 60}`.slice(-2);
              const minutes = `${Math.floor(item.seconds / 60)}`;
              const getMinutes = `0${minutes % 60}`.slice(-2);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    {getMinutes} : {getSeconds}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
