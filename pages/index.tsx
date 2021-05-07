import { InferGetStaticPropsType } from "next";
import React from "react";
import { fetchAssignments, fetchClasses, fetchUpcomings } from "../api";
import ContentBody from "../components/ContentBody";
import ContentHeader from "../components/ContentHeader";
import SideBar from "../components/SideBar";

function ContentArea({ data }: any) {
  return (
    <div className="flex-grow bg-gray-800">
      <ContentHeader></ContentHeader>
      <ContentBody data={data}></ContentBody>
    </div>
  );
}

function Layout({ data }: any) {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <SideBar data={data} />
      <ContentArea data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const classes = await fetchClasses();
  const assignments = await fetchAssignments();
  const upcomings = await fetchUpcomings();

  return {
    props: {
      data: [
        {
          name: 'Classes',
          data: classes.data,
          count: classes.meta?.total || 0,
        },
        {
          name: 'Assignments Due',
          data: assignments.data,
          count: assignments.meta?.total || 0,
        },
        {
          name: 'Upcoming',
          data: upcomings.data,
          count: upcomings.meta?.total || 0,
        },
      ]
    },
    revalidate: 1,
  }
}

export default function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout data={data} />
  );
}
