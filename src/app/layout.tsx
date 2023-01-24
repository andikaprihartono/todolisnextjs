import './globals.css';
import TitlePage from './components/judul';
import FormInput from './components/form';
import ListItem from './components/list';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='w-full bg-blue-500 p-4'>
       <main className='w-3/6 bg-white mx-auto p-4'>
        <TitlePage />
        <FormInput />
        <ListItem />

       </main>
        </body>
    </html>
  )
}
