import React from "react";
import { useEffect, useState } from "react";
import { database } from "@/firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Navbar } from "@/components/Navbar";

function TableRow({ sName, srn, dept, mail }) {
  return (
    <tr className="border">
      <td className="p-3">{sName}</td>
      <td className="p-3">{srn}</td>
      <td className="p-3">{dept}</td>
      <td className="p-3">{mail}</td>
    </tr>
  );
}
function studentlist() {
  const dbInstance = collection(database, "StudentInfo");

  const [podcasts, setPodcasts] = useState();

  useEffect(() => {
    getDocs(dbInstance).then((docSnap) =>
      setPodcasts(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);
  return (
    <>
      <Navbar />
      <table className="w-full p-5">
        <colgroup>
          <col span={1} className="w-[25%]" />
          <col span={1} className="w-[15%]" />
          <col span={1} className="w-[30%]" />
          <col span={1} className="w-[30%]" />
        </colgroup>
        <tbody>
          <tr className="bg-gray-300">
            <td className="p-3 font-bold">Name</td>
            <td className="p-3 font-bold">SRN</td>
            <td className="p-3 font-bold">Department</td>
            <td className="p-3 font-bold">Email</td>
          </tr>
          {podcasts?.map((key, i) => (
            <TableRow
              key={i}
              sName={key.name}
              srn={key.srn}
              dept={key.Department}
              mail={key.email}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default studentlist;