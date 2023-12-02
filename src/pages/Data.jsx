import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Pagination } from "@mui/material";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const Data = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        const filteredPosts = data.filter((post) => post.userId === 1);
        setPosts(data);
        setFilteredPosts(filteredPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const totalPosts = posts.length;
  const postsByUserId1 = filteredPosts.length;

  const pieChartData = [
    { name: "User ID 1", value: postsByUserId1 },
    { name: "Other Users", value: totalPosts - postsByUserId1 },
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div
      style={{
        backgroundColor: "#383833",
        color: "white",
        padding: "20px",
      }}
    >
    
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Card style={{ height: "fit-content" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom align="center">
              Pie Chart
            </Typography>
            <PieChart width={300} height={300}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? "#82ca9d" : "#8884d8"}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </CardContent>
        </Card>
      </Box>

      <TableContainer component={Paper} style={{ backgroundColor:"whitesmoke", marginBottom: "20px", width: "80%", marginTop: "20px" , marginLeft:"150px"}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={Math.ceil(filteredPosts.length / postsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": { color: "white" },
            "& .Mui-selected": { backgroundColor: "#f0dd0e", color: "black" },
          }}
        />
      </Box>
    </div>
  );
};

export default Data;
