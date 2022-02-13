import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
  { 
    id: 'm1', 
    title: 'A First Meetup', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/World_Bank_building_at_Washington.jpg/1280px-World_Bank_building_at_Washington.jpg',
    address: 'some address 10, 1234 city one',
    description: 'This is a first meetup'
  },
  { 
    id: 'm2', 
    title: 'A Second Meetup', 
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/AcueductoSegovia04.JPG/1280px-AcueductoSegovia04.JPG',
    address: 'some address 20, 4321 city two',
    description: 'This is a second meetup'
  },
]

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUP}/>
}

export default HomePage;