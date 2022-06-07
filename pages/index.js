import Head from 'next/head';
import Header from '../templates/layout/header'
import Sidebar from '../templates/layout/sidebar'
import ShowHome from "../templates/components/box-home";
import ShowAbout from "../templates/components/box-about";
import ShowService from "../templates/components/box-service";
import ShowPortfolio from "../templates/components/box-portfolio";
import ShowTestimonial from "../templates/components/box-testimonial";
import ShowBlog from "../templates/components/box-blog";
import ShowContact from "../templates/components/box-contact";

import { BoxHome, BoxAbout, BoxService, BoxPortfolio, BoxTestimonial, BoxBlog, BoxContact } from "../api-data/profile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Huong Nguyen</title>
        <meta name="description" content="My CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="content">
        <Header />
        <Sidebar />
        <div className="content">
          <ShowHome databoxhome={BoxHome} />
          <ShowAbout databoxabout={BoxAbout} />
          <ShowService databoxservice={BoxService} />
          <ShowPortfolio databoxportfolio={BoxPortfolio} />
          <ShowTestimonial databoxtestimonial={BoxTestimonial} />
          <ShowBlog databoxblog={BoxBlog} />
          <ShowContact databoxcontact={BoxContact} />
        </div>
      </body>
    </>
  )
}
