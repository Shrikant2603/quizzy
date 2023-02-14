import { Button } from '@mui/material'
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="flex flex-col justify-center text-center mt-44">
      <span className="text-uppercase text-5xl font-poppins cursor-pointer text-[#426696] m-10">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
        sx={{
          backgroundColor: "#426696",
          '&:hover': {
            backgroundColor: '#255270',
            transform: 'scale(1.1)',
          },
        }}
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;