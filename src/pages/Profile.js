import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProfilePic from '../components/profile/ProfilePic';
import DisplayProfile from '../components/profile/DisplayProfile';
import EditProfile from '../components/profile/EditProfile';
import AccomplishedTasks from '../components/study/AccomplishedTasks';
import OngoingTasks from '../components/study/OngoingTasks';

const Profile = () => {
  const { id } = useParams();
  const learners = useSelector((state) => state.learners);
  const learner = learners.filter((learner) => learner.id === parseInt(id, 10))[0];

  const studies = useSelector((state) => state.studies);

  const [edit, setEdit] = useState(false);
  const [accomplished, setAccomplished] = useState(true);

  const activeStyle = {
    backgroundColor: '#1a202c',
    color: '#fff',
  };

  const inactiveStyle = {
    backgroundColor: 'lightgray',
    color: '#000',
  };

  const [username, setUsername] = useState(learner.username);
  const [fullname, setFullname] = useState(learner.fullname);
  const [email, setEmail] = useState(learner.fullname);
  const [image, setImage] = useState(learner.image);
  const [bio, setBio] = useState(learner.bio);
  const [birthdate, setBirthdate] = useState(learner.birthdate);
  const [city, setCity] = useState(learner.city);
  const [phone, setPhone] = useState(learner.phone);
  const [role, setRole] = useState(learner.role);
  const [github, setGithub] = useState(learner.github);
  const [linkedin, setLinkedin] = useState(learner.linkedin);

  return (
    <>
      {/* Learner Profile Data Section */}
      <section id="learner-data">
        <div className="flex justify-center m-4 font-qs">
          <div className="bg-box rounded-md shadow-inner shadow-black p-4 w-[90%] flex items-start">
            <ProfilePic
              image={image}
              github={github}
              linkedin={linkedin}
            />
            {!edit ? (
              <DisplayProfile
                setEdit={setEdit}
                username={username}
                fullname={fullname}
                email={email}
                bio={bio}
                birthdate={birthdate}
                city={city}
                phone={phone}
                role={role}
              />
            )
              : (
                <EditProfile
                  setEdit={setEdit}
                  setUsername={setUsername}
                  setFullname={setFullname}
                  setEmail={setEmail}
                  setImage={setImage}
                  setBio={setBio}
                  setBirthdate={setBirthdate}
                  setCity={setCity}
                  setPhone={setPhone}
                  setRole={setRole}
                  setGithub={setGithub}
                  setLinkedin={setLinkedin}
                />
              )}
          </div>
        </div>
      </section>

      {/* Learning Fields Section */}
      <section id="learning-field">
        <div className="flex justify-center m-4">
          <div className="w-[90%] p-4">
            <button type="button" className="mr-4 rounded-xl btn" style={!accomplished ? activeStyle : inactiveStyle} onClick={() => setAccomplished(true)}>Accomplished Study</button>
            <button type="button" className="mr-4 rounded-xl btn" style={accomplished ? activeStyle : inactiveStyle} onClick={() => setAccomplished(false)}>On Going Study</button>
          </div>
        </div>
        {accomplished ? <AccomplishedTasks studies={studies} />
          : <OngoingTasks studies={studies} />}
      </section>
    </>
  );
};

export default Profile;
