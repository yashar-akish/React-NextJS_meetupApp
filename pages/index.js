
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

function HomePage(props) {
  return <MeetupList meetups={props.meetup} />;
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  return {
    props: {
      meetup: DUMMY_MEETUP
    }
  }
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetup: DUMMY_MEETUP
//     },
//     revalidate: 10
//   }
// }

export default HomePage;