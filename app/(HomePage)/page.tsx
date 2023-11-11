import Container from '@/components/ui/container'

export default async function HomePage() {
  return (
    <Container>
      {Array(100)
        .fill(0)
        .map((_, index) => (
          <h1 key={index}>Hello From Home Page</h1>
        ))}
    </Container>
  )
}
