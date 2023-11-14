import Container from '@/components/ui/container'

export default async function HomePage() {
  return (
    <>
      <div className="h-96 w-full bg-red-500"></div>
      <Container>
        {Array(100)
          .fill(0)
          .map((_, index) => (
            <h1 key={index}>Hello From Home Page</h1>
          ))}
      </Container>
    </>
  )
}
