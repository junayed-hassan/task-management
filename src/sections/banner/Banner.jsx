import Container from "../../components/Container"
import bannerImage from '../../images/task.png';

function Banner() {
  return (
    <Container className="grid grid-cols-2 items-center">
        <div className="">
            <h1 className="text-5xl font-bold mb-3 text-rose-700">Task collaboration</h1>
            <p className="text-lg">We are excited to have you here! Our website is designed to provide you with the best user experience, featuring a sleek and modern design. Explore our various sections and learn more about what we have to offer.</p>
        </div>
        <div className="mx-auto ">
            <img className="max-w-sm" src={bannerImage} alt="banner image" />
        </div>
    </Container>
  )
}

export default Banner