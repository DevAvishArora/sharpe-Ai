import { Typography, TextField, Button, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { firestore } from "../firebase";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!walletAddress || !/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        walletAddress: "Please enter a valid Ethereum wallet address.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, walletAddress: "" }));
    }
  
    const amountNumber = parseFloat(amount);
    const isValidAmount = !isNaN(amountNumber) && amountNumber >= 0 && amountNumber <= 10000;
    if (!isValidAmount) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        amount: "Please enter a valid amount between 0 and 10,000.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, amount: "" }));
  
      try {
        await firestore.collection("transactions").add({
          walletAddress,
          amount: amountNumber,
          timestamp: new Date(),
        });
  
        toast.success("Form submitted successfully and data sent to Firestore!");
  
        setWalletAddress("");
        setAmount("");
  
        console.log("Form submitted successfully and data sent to Firestore!");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#383833",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ToastContainer />
      <Paper
        elevation={3}
        style={{
          width: "100%",
          maxWidth: "400px",
          margin: "auto",
          padding: "20px",
          border: "5px solid #ffd700",
          borderRadius: "10px",
          backgroundColor: "#383833",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          style={{ marginBottom: "20px", color: "#ffd700" }}
        >
          Transaction Details
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Wallet Address"
            variant="filled"
            fullWidth
            margin="normal"
            error={Boolean(errors.walletAddress)}
            helperText={errors.walletAddress}
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            style={{ backgroundColor: "whitesmoke", borderRadius: "20px" }}
          />

          <TextField
            label="Amount"
            variant="filled"
            fullWidth
            margin="normal"
            type="number"
            error={Boolean(errors.amount)}
            helperText={errors.amount}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ backgroundColor: "whitesmoke", borderRadius: "20px" }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<SendIcon />}
            style={{
              marginLeft: "130px",
              marginTop: "16px",
              backgroundColor: "#ffd700",
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Transaction;
