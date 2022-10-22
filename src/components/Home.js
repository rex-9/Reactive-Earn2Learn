import { learners } from '../data'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

const Home = () => (
  <div className="flex flex-wrap justify-center bg-primary">
    {
      learners.map(learner =>
        <div className="flex flex-col items-center py-2 m-2 bg-white rounded-lg w-80 hover:shadow-2xl">
          <div>Student Image</div>
          <div className="flex justify-center border-b-[1px] w-[80%] font-bold border-b-gray-600 py-1 px-2">
            {learner.name}
          </div>
          <div className="p-2">
            Learning fields under construction...
          </div>
          <button type="button" className="w-40 px-4 py-2 text-gray-900 bg-yellow-500 rounded-lg hover:bg-yellow-300">Explore More</button>
          <div className="flex flex-wrap justify-around w-40 mt-2">
            <a href={learner.github} className="p-1 rounded-lg hover:bg-gray-300">
              <img src={github} alt="GitHub Profile" />
            </a>
            <a href={learner.linkedin} className="p-1 rounded-lg hover:bg-gray-300">
              <img src={linkedin} alt="LinkedIn Profile" />
            </a>
          </div>
        </div>
      )
    }
  </div>
);

export default Home;