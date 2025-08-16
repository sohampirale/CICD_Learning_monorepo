import {client} from "@repo/db/client"

export default async function Home() {
  const user = await client.user.findFirst()

  return (
    <div >
      <p>Hello World</p>
      <p>User fetched from DB is</p>
      {user?.username}
      {user?.password}
    </div>
  );
}
