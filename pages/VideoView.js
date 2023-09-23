import { Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import ParticleBackground from "../components/particleBackground";
import { database } from "../firebaseConfig";
const videosPerPage = 5;
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FaPlay, FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";
import Pagination from "@material-ui/lab/Pagination";
import Modal from "react-modal";


export default function VideoView() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#e6e6e6",
        contrastText: "#fff",
        color: "#fff",
      },
      color: "#fff",
    },
  });
  const textWhiteStyle = {
    color: "white",
  };

  const modalBodyStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(database, "formData"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      console.log(querySnapshot);
      setVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };
  const handleDeleteVideo = async (index) => {
    const video = videos[index];

    try {
      const storageRef = ref(storage, video.videoURL);
      await deleteObject(storageRef);

      const videoDocRef = doc(database, "formData", video.id);
      await deleteDoc(videoDocRef);

      const updatedVideos = videos.filter((_, i) => i !== index);
      setVideos(updatedVideos);
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };
  const handleOpenModal = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };
  return (
    <>
      <Navbar2 />

      <main>
        <ParticleBackground />
        <div className="h-auto flex flex-col justify-center items-center py-8">
          <div
            style={{ zIndex: "1" }}
            className="px-12 py-10 w-11/12 sm:w-10/12 md:w-4/5 lg:w-4/5 xl:w-1/2 glass-morphic border-2 border-black rounded-md flex flex-col box-border"
          >
            <div className="text-5xl text-white text-center">View Videos</div>

            <div className="flex flex-col">
              <ThemeProvider theme={createTheme()}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell style={textWhiteStyle}>Sl.no</TableCell>
                        <TableCell style={textWhiteStyle}>
                          Training Level
                        </TableCell>
                        <TableCell style={textWhiteStyle}>
                          Selected Course
                        </TableCell>
                        <TableCell style={textWhiteStyle}>Video</TableCell>
                        <TableCell style={textWhiteStyle}>Delete/Row</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {currentVideos.map((video, index) => (
                        <TableRow key={index}>
                          <TableCell style={textWhiteStyle}>
                            {video.slNo}
                          </TableCell>
                          <TableCell style={textWhiteStyle}>
                            {video.trainingLevel}
                          </TableCell>
                          <TableCell style={textWhiteStyle}>
                            {video.selectedCourse}
                          </TableCell>
                          <TableCell style={textWhiteStyle}>
                            <FaPlay
                              className="video-icon"
                              onClick={() => handleOpenModal(video.video)}
                            />
                          </TableCell>
                          <TableCell style={textWhiteStyle}>
                            <Button
                              variant="contained"
                              onClick={() => handleDeleteVideo(index)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handleChangePage}
                  color="primary"
                  className="mt-3"
                />
              </ThemeProvider>
            </div>
            <Modal
              style={modalBodyStyle}
              isOpen={selectedVideo !== null}
              onRequestClose={handleCloseModal}
              contentLabel="Video Modal"
              className="video-modal"
              overlayClassName="video-modal-overlay"
            >
              <div className="modal-header">
                <FaTimes
                  className="cancel-icon"
                  style={{ fontSize: "24px", alignSelf: "flex-end" }}
                  onClick={handleCloseModal}
                />
              </div>
              <div className="modal-body flex justify-center items-center">
                <ReactPlayer url={selectedVideo} controls />
              </div>
            </Modal>
          </div>
        </div>
      </main>
    </>
  );
}
