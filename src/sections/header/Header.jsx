import Container from "../../components/Container";
import { MdOutlineLightMode } from "react-icons/md";

function Header() {
  return (
    <div className="py-4 border-b">
        <Container className="flex justify-between items-center">
            <strong className="">JUNAYED HASSAN</strong>
            <MdOutlineLightMode className="text-xl cursor-pointer" />
        </Container>
    </div>
  )
}

export default Header