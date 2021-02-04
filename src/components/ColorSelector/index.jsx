import { Box } from "@material-ui/core";

function ColorSelector(props) {
  const { color, selected, onClick } = props;

  return <Box onClick={onClick} style={{ cursor: 'pointer' }} ml={'16px'} width={'20px'} height={'20px'} borderRadius={'20px'} bgcolor={color} border={selected ? `3px solid #fb8500` : 'none'} />;
}

export default ColorSelector;