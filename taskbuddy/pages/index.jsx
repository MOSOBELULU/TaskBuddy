import { Inter } from "next/font/google";
import Notification from "../components/ui/notification";
import Authentication from "../components/Authentication";
import Calender from "../components/Calender";
import Profile from "../components/Profile";
import Search from "../components/Search";
import TaskForm from "../components/TaskForm";
// import TaskList from "../components/TaskList";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Authentication />
    <Calender />
    <Profile />
    <Search />
    <TaskForm />
    {/* <TaskList /> */}
    <Notification />
    </>
  )
  }
      