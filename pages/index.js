import Head from 'next/head';

import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const url = 'mongodb+srv:';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meetup app (React NextJs)</title>
        <meta name='description' content='browse a huge meetup places'/>
      </Head>
      <MeetupList meetups={props.meetup} />;
    </>
  )
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetup: DUMMY_MEETUP
//     }
//   }
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(url);
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetup: meetups.map(meetup => ({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString()
      }))
    },
    revalidate: 10
  }
}

export default HomePage;