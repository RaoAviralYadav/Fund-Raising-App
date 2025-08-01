import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* Push content below navbar */}
        {/* Hero section here */}
        <h1 className="text-4xl text-center mt-10">Welcome to the Fundraising Portal</h1>
      </main>
    </>
  );
}
