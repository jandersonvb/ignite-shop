import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$green300",
  color: '#fff',
  padding: "10px 24px",
  borderRadius: 5,
  fontSize: 16,
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.2s",

  "&:hover": {
    backgroundColor: "$green500",
  },


  span: {
    fontSize: 20,
  },
});


export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button>
        <span>Clique aqui meu Jovem!</span>
      </Button>
    </>
  );
}


