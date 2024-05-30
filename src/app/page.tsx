const mockUrls = [
  "https://utfs.io/f/f84d159b-4cbe-41bc-9435-521dc348bbe3-9yg51o.jpg",
  "https://utfs.io/f/23365aff-1ee9-4cce-b900-867e4480dd62-9yg51p.jpg",
  "https://utfs.io/f/6ada3bc3-6cfa-422f-830a-a01ad658b3aa-gv1znd.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      hello modern react
    </main>
  );
}
