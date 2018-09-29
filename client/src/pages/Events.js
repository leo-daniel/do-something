import React from "react";
import Navbar from "../components/Navbar";
import LeafletMap from "../components/LeafletMap";
import EventFeed from "../components/EventFeed";

// const styles = theme => ({
//   layout: {
//     width: "auto",
//     marginLeft: theme.spacing.unit * 3,
//     marginRight: theme.spacing.unit * 3,
//     [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
//       width: 1100,
//       marginLeft: "auto",
//       marginRight: "auto"
//     }
//   },
//   // cardGrid: {
//   //   padding: `${theme.spacing.unit * 8}px 0`,
//   //   maxWidth: 512
//   // },
//   // card: {
//   //   height: "100%",
//   //   display: "flex",
//   //   flexDirection: "column",
//   //   maxWidth: 496
//   // },
//   // cardContent: {
//   //   flexGrow: 1
//   // },
//   // footer: {
//   //   backgroundColor: theme.palette.background.paper,
//   //   padding: theme.spacing.unit * 6
//   // },
//   // icon: {
//   //   fontSize: "1rem",
//   //   marginRight: ".5rem",
//   // }
// });

// function Events(props) {
//   const { classes } = props;

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main>
//         <div className={classNames(classes.layout, classes.cardGrid)}>
//           <Grid container justify="center" spacing={24}>
//             <EventFeed />
//           </Grid>
//         </div>
//       </main>
//     </React.Fragment>
//   );
// }

export default props => (
  // <div>
  //     <Navbar />
  //     <LeafletMap />
  //     <EventFeed />
  //     {/* footer goes here when ready */}
  // </div>

  <div>
    <Nav />
    <Hero />
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Let's Do Something!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Welcome to Do Something where we believe the world is a better place
            when people lend their help and talents to opportunities in need.
            Already a member? Great! Login and do something great.
          </p>
          <p>
            New to the site? Great! Join up to find opportunities to do great
            things in your community.
          </p>
        </Col>
      </Row>
      <EventFeed />
    </Container>
  </div>
);
