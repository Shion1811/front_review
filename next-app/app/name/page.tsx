function Page() {
    const users = [
      { name: "佐藤 太郎", age: 24 },
      { name: "鈴木 花子", age: 30 },
      { name: "高橋 次郎", age: 27 },
    ];
  
    return (
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>年齢</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Page;