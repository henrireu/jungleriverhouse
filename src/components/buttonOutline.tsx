import Button from 'react-bootstrap/Button';

interface ButtonProps {
  text: string;
}

const ButtonOutline = ({ text }: ButtonProps) => {
  return (
    <>
      <style type="text/css">
        {`
          .btn-outline-light {
            font-family: "Epilogue", sans-serif;
          }
        `}
      </style>
      <Button variant="outline-light">{text}</Button>
    </>
  )
}

/*const ButtonOutline = ({ text }: ButtonProps) => {
  return (
    <>
      <style type="text/css">
        {`
          .btn-outline-warning {
            background-color: transparent;
            color: #F2F0E6;
            border: solid 1px #F2F0E6;
          }

          .btn-outline-warning:hover {
            background-color: #F2F0E6;
            border: 1px solid #F2F0E6;
          }

          .btn-outline-warning:active {
            background-color: #F2F0E6 !important; 
            border: 1px solid #F2F0E6 !important;
          }
        `}
      </style>
      <Button variant="outline-warning" style={{ }}>{text}</Button>
    </>
  )
}*/

export default ButtonOutline;