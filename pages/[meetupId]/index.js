
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {

  return (
    <MeetupDetail
    image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/World_Bank_building_at_Washington.jpg/1280px-World_Bank_building_at_Washington.jpg'
    title='First Meetup'
    address='some address 10, 1234 city one'
    description='Amet adipisicing eiusmod nisi ad ut tempor ex laboris voluptate proident laborum dolor velit proident. Et consequat ullamco incididunt cillum incididunt pariatur dolore ea ullamco esse aliqua id. Mollit nostrud commodo sint proident esse ad incididunt. Sint voluptate aliquip quis sunt qui aliqua ut aliquip cillum anim exercitation.☻'
  />
  )
}

export async function getStaticPaths() {
  return {
    fallback:false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id:meetupId,
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/World_Bank_building_at_Washington.jpg/1280px-World_Bank_building_at_Washington.jpg',
        title:'First Meetup',
        address:'some address 10, 1234 city one',
        description:'Amet adipisicing eiusmod nisi ad ut tempor ex laboris voluptate proident laborum dolor velit proident. Et consequat ullamco incididunt cillum incididunt pariatur dolore ea ullamco esse aliqua id. Mollit nostrud commodo sint proident esse ad incididunt. Sint voluptate aliquip quis sunt qui aliqua ut aliquip cillum anim exercitation.☻'
      },
    }
  }
}


export default MeetupDetails;