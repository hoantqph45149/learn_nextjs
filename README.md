## nextjs là gì ?

Next.js là một framework React cho phép bạn xây dựng các ứng dụng web tĩnh và động một cách dễ dàng. Nó cung cấp các tính năng như:

1. **Rendering phía server (Server-side rendering - SSR)**: Giúp cải thiện SEO và thời gian tải trang.
2. **Rendering phía client (Client-side rendering - CSR)**: Cho phép tải dữ liệu động sau khi trang đã được tải.
3. **Tạo trang tĩnh (Static Site Generation - SSG)**: Tạo các trang tĩnh tại thời điểm build, giúp cải thiện hiệu suất.
4. **API Routes**: Cho phép bạn xây dựng các API endpoint trực tiếp trong ứng dụng Next.js.
5. **Tối ưu hóa hình ảnh**: Tự động tối ưu hóa hình ảnh để cải thiện hiệu suất.
6. **Hỗ trợ TypeScript**: Tích hợp sẵn với TypeScript để phát triển ứng dụng an toàn hơn.

Next.js được phát triển bởi Vercel và rất phổ biến trong cộng đồng phát triển web nhờ vào sự linh hoạt và hiệu suất cao.

## routing trong nextjs

Next.js sử dụng hệ thống routing dựa trên filesystem, nghĩa là cấu trúc thư mục và tên file trong thư mục `app` sẽ xác định các route trong ứng dụng của bạn khi sử dụng App Router. Dưới đây là một số điểm chính về routing trong Next.js với App Router:

1. **Trang mặc định**: File `app/page.js` sẽ tương ứng với route `/`.
2. **Trang con**: File `app/about/page.js` sẽ tương ứng với route `/about`.
3. **Route động**: Bạn có thể tạo các route động bằng cách sử dụng dấu ngoặc vuông. Ví dụ, file `app/posts/[id]/page.js` sẽ tương ứng với route `/posts/:id`, nơi `:id` là một tham số động.
4. **Nested Routes**: Bạn có thể tạo các route lồng nhau bằng cách tạo các thư mục con trong thư mục `app`. Ví dụ, file `app/blog/first-post/page.js` sẽ tương ứng với route `/blog/first-post`.
5. **API Routes**: Next.js cũng hỗ trợ tạo các API endpoint bằng cách tạo các file trong thư mục `app/api`. Ví dụ, file `app/api/hello/route.js` sẽ tạo ra endpoint `/api/hello`.

Ví dụ về route động:

```javascript
// filepath: /c:/Users/company/training_nextjs/app/posts/[id]/page.js
const Post = ({ params }) => {
  const { id } = params;

  return <p>Post: {id}</p>;
};
```

## nested routes trong nextjs

Trong Next.js, bạn có thể tạo các route lồng nhau (nested routes) bằng cách tạo các thư mục con trong thư mục `app`. Mỗi thư mục con sẽ đại diện cho một phần của URL. Dưới đây là một số ví dụ về cách tạo nested routes:

1. **Trang lồng nhau**: Bạn có thể tạo các trang lồng nhau bằng cách tạo các thư mục con và file `page.js` trong mỗi thư mục. Ví dụ:

   - `app/blog/page.js` sẽ tương ứng với route `/blog`.
   - `app/blog/first-post/page.js` sẽ tương ứng với route `/blog/first-post`.

2. **Route động lồng nhau**: Bạn có thể tạo các route động lồng nhau bằng cách sử dụng dấu ngoặc vuông trong tên thư mục. Ví dụ:
   - `app/posts/[id]/page.js` sẽ tương ứng với route `/posts/:id`.
   - `app/posts/[id]/comments/[commentId]/page.js` sẽ tương ứng với route `/posts/:id/comments/:commentId`.

Ví dụ về nested route động:

```javascript
// filepath: /c:/Users/company/training_nextjs/app/posts/[id]/comments/[commentId]/page.js
const Comment = ({ params }) => {
  const { id, commentId } = params;

  return (
    <div>
      <p>Post ID: {id}</p>
      <p>Comment ID: {commentId}</p>
    </div>
  );
};
```

## Dynamic Routes trong Nextjs App Router

Trong Next.js với App Router, bạn có thể tạo các route động bằng cách sử dụng dấu ngoặc vuông trong tên thư mục hoặc file. Điều này cho phép bạn tạo các trang có URL động. Dưới đây là một số ví dụ về cách tạo dynamic routes:

1. **Route động đơn giản**:

   - `app/posts/[id]/page.js` sẽ tương ứng với route `/posts/:id`.

2. **Route động lồng nhau**:
   - `app/posts/[id]/comments/[commentId]/page.js` sẽ tương ứng với route `/posts/:id/comments/:commentId`.

Ví dụ về route động đơn giản:

```javascript
// filepath: /c:/Users/company/training_nextjs/app/posts/[id]/page.js
const Post = ({ params }) => {
  const { id } = params;

  return <p>Post: {id}</p>;
};
```

## nested dynamic routes trong nextjs

Trong Next.js, bạn có thể tạo các route động lồng nhau (nested dynamic routes) bằng cách sử dụng dấu ngoặc vuông trong tên thư mục hoặc file. Điều này cho phép bạn tạo các trang có URL động và lồng nhau. Dưới đây là một số ví dụ về cách tạo nested dynamic routes:

1. **Route động đơn giản**:

   - `app/posts/[id]/page.js` sẽ tương ứng với route `/posts/:id`.

2. **Route động lồng nhau**:
   - `app/posts/[id]/comments/[commentId]/page.js` sẽ tương ứng với route `/posts/:id/comments/:commentId`.

Ví dụ về nested dynamic route:

```javascript
// filepath: /c:/Users/company/training_nextjs/app/posts/[id]/comments/[commentId]/page.js
const Comment = ({ params }) => {
  const { id, commentId } = params;

  return (
    <div>
      <p>Post ID: {id}</p>
      <p>Comment ID: {commentId}</p>
    </div>
  );
};
```

## Catch-all routes trong nextjs

Catch-all routes trong Next.js cho phép bạn tạo các route có thể bắt tất cả các phần của URL sau một đoạn nhất định. Điều này rất hữu ích khi bạn muốn tạo các trang có cấu trúc URL linh hoạt. Bạn có thể tạo catch-all routes bằng cách sử dụng dấu ba chấm (`...`) trong tên thư mục hoặc file.

Ví dụ về catch-all route:

```javascript
// filepath: /c:/Users/company/training_nextjs/app/posts/[...slug]/page.js
const Post = ({ params }) => {
  const { slug } = params;

  return <p>Post Slug: {slug.join("/")}</p>;
};
```

## route groups trong nextjs

Route Groups trong Next.js cho phép bạn tổ chức các route của mình thành các nhóm mà không ảnh hưởng đến cấu trúc URL. Điều này rất hữu ích khi bạn muốn tổ chức mã nguồn của mình một cách rõ ràng và dễ quản lý hơn.

Để tạo Route Groups, bạn có thể sử dụng dấu ngoặc đơn trong tên thư mục. Các thư mục này sẽ không ảnh hưởng đến URL của route.

Ví dụ về cấu trúc thư mục với Route Groups:
`app/ (marketing)/ home/ page.js about/ page.js (dashboard)/ settings/ page.js profile/ page.js`

Trong ví dụ trên, các thư mục `(marketing)` và `(dashboard)` là các Route Groups. Các thư mục này sẽ không xuất hiện trong URL của route.

Ví dụ về cách sử dụng Route Groups:

```javascript
// filepath: /c:/Users/company/training_nextjs/app/(marketing)/home/page.js
const Home = () => {
  return <h1>Home Page</h1>;
};

export default Home;
```

## Layout trong nextjs

Trong Next.js, bạn có thể sử dụng layout để tạo ra các bố cục trang dùng chung cho nhiều trang khác nhau trong ứng dụng của mình. Layout giúp bạn duy trì sự nhất quán trong giao diện người dùng và giảm thiểu việc lặp lại mã nguồn.

### Tạo Layout

Để tạo một layout, bạn cần tạo một file `layout.js` trong thư mục `app`. File này sẽ chứa cấu trúc HTML và các thành phần dùng chung cho các trang con.

Ví dụ về cấu trúc thư mục:

`app/ layout.js page.js about/ page.js contact/ page.js`

Ví dụ về `layout.js`:

```javascript
// filepath: /c:/Users/company/training_nextjs/app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <header>
          <h1>My Next.js App</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2023 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
```

## nested layouts trong nextjs

Trong Next.js, bạn có thể tạo các layout lồng nhau (nested layouts) để tổ chức và quản lý giao diện người dùng một cách hiệu quả. Nested layouts cho phép bạn tạo các bố cục dùng chung cho các phần khác nhau của ứng dụng.

### Ví dụ về cấu trúc thư mục với nested layouts:

`src/ app/ layout.tsx dashboard/ layout.tsx page.tsx settings/ layout.tsx page.tsx`

### Ví dụ về `src/app/layout.tsx`:

```javascript
// filepath: /c:/Users/company/training_nextjs/src/app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <h1>My Next.js App</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
```

### Ví dụ về `src/app/dashboard/layout.tsx`:

```javascript
// filepath: /c:/Users/company/training_nextjs/src/app/dashboard/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>
        <a href="/dashboard">Dashboard Home</a>
        <a href="/dashboard/settings">Settings</a>
      </nav>
      <main>{children}</main>
    </div>
  );
}
```

## routing metadata trong nextjs

Trong Next.js với App Router, bạn có thể thêm metadata cho các route của mình để cung cấp thông tin bổ sung cho các trang, chẳng hạn như tiêu đề trang, mô tả, và các thẻ meta khác. Điều này giúp cải thiện SEO và cung cấp trải nghiệm người dùng tốt hơn.

### Sử dụng `metadata` trong App Router

Khi sử dụng App Router, bạn có thể thêm metadata trực tiếp trong các file layout hoặc page bằng cách sử dụng thuộc tính `metadata`.

Ví dụ:

```javascript
// metadata trong file layout:
// filepath: /c:/Users/company/training_nextjs/app/layout.js
export const metadata = {
  title: 'My Next.js App',
  description: 'This is my Next.js application.',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
// metadata trong trang cụ thể:
// filepath: /c:/Users/company/training_nextjs/app/about/page.js
export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company and team.',
};

export default function AboutPage() {
  return (
    <div>
      <h2>About Us</h2>
      <p>Welcome to the about page.</p>
    </div>
  );
}
```

## Error handling trong nextjs

Trong Next.js với App Router, bạn có thể xử lý lỗi một cách hiệu quả bằng cách sử dụng các component và phương pháp xử lý lỗi tích hợp sẵn. Dưới đây là một số cách để xử lý lỗi trong Next.js:

Ví dụ:

`error.js`;

```javascript
"use client"; // Các component lỗi phải là Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Ghi log lỗi vào dịch vụ theo dõi lỗi
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Đã xảy ra lỗi!</h2>
      <button onClick={() => reset()}>Thử lại</button>
    </div>
  );
}
```

`global-error.js`

```javascript
"use client"; // Các component lỗi phải là Client Components

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Đã xảy ra lỗi toàn cục!</h2>
        <button onClick={() => reset()}>Thử lại</button>
      </body>
    </html>
  );
}
```

## file colocation trong nextjs

File colocation trong Next.js là một phương pháp tổ chức mã nguồn, trong đó các file liên quan đến một thành phần hoặc một trang được đặt cùng nhau trong cùng một thư mục. Điều này giúp dễ dàng quản lý và duy trì mã nguồn, vì tất cả các file liên quan đều ở cùng một nơi.

Ví dụ, bạn có thể đặt các file CSS, test, và các file phụ trợ khác cùng với file component chính:

## private folders trong nextjs

Trong Next.js, bạn có thể sử dụng các thư mục riêng tư (private folders) để chứa các file và thư mục không nên được truy cập trực tiếp từ trình duyệt. Các thư mục này thường được sử dụng để chứa các module, helper functions, hoặc các file cấu hình mà bạn không muốn lộ ra ngoài.

Một số thư mục riêng tư phổ biến trong Next.js:

1. **`lib`**: Thư mục này thường được sử dụng để chứa các thư viện và helper functions.
2. **`utils`**: Thư mục này thường được sử dụng để chứa các tiện ích và hàm hỗ trợ.
3. **`components`**: Thư mục này chứa các thành phần React có thể được sử dụng lại trong toàn bộ ứng dụng.
4. **`hooks`**: Thư mục này chứa các custom hooks.

Ví dụ về cấu trúc thư mục với các thư mục riêng tư:
`src/ app/ page.js lib/ api.js utils/ formatDate.js components/ Header.js hooks/ useAuth.js`

## Fetching trong Next.js

### 1. Fetching Dữ Liệu trong Server Components

`Server Components` cho phép `fetch` dữ liệu trực tiếp trên `server`, giúp tối ưu hóa hiệu suất bằng cách giảm tải công việc trên client.

```javascript
// app/page.tsx
export default async function Home() {
  const res = await fetch("https://api.example.com/data", {
    cache: "no-store", // or 'force-cache' / 'default'
  });
  const data = await res.json();

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// cache Options:
// no-store: Không cache, luôn fetch dữ liệu mới.
// force-cache: Cache dữ liệu và dùng lại.
// Default: Next.js tự động quyết định cách cache dựa trên kết quả.
```

### 2. Fetching Dữ Liệu trong Client Components

Sử dụng `client components` khi cần dữ liệu động hoặc phụ thuộc vào hành động của người dùng.

```javascript
"use client";

import { useEffect, useState } from "react";

export default function ClientComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
```

## Caching Data trong Next.js

### Static Data

`cache : force-cache` - Lưu trữ dữ liệu vào cache

```javascript
// app/page.tsx
export default async function Home() {
  const res = await fetch("https://api.example.com/data", {
    cache: "force-cache", // Lưu trữ dữ liệu vào cache
  });
  const data = await res.json();

  return (
    <div>
      <h1>Cached Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

### Dynamic Data

`cache : no-store` - Không lưu trữ dữ liệu vào cache

```javascript
// app/page.tsx
export default async function Home() {
  const res = await fetch("https://api.example.com/data", {
    cache: "no-store", // Không lưu trữ dữ liệu vào cache
  });
  const data = await res.json();

  return (
    <div></div>
      <h1>Dynamic Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
```

### Incremental Static Regeneration (ISR)

`ISR` cho phép bạn kết hợp static rendering và khả năng cập nhật dữ liệu định kỳ. Bạn có thể sử dụng thuộc tính `revalidate` để chỉ định thời gian cập nhật `cache`.

```javascript
// app/page.tsx
export default async function Home() {
  const res = await fetch("https://api.example.com/data", {
    next: { revalidate: 10 }, // Tái xác thực sau 10 giây
  });
  const data = await res.json();

  return (
    <div>
      <h1>Data with ISR:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

## server action trong nextjs

### 1. Server Action

`Server Actions` là một tính năng cho phép bạn chạy logic phía `server` trong các thành phần `React` bằng cách định nghĩa hàm `server` trong một `component`. Những hàm này có thể được gọi trực tiếp từ `client`.

- Server Actions giúp loại bỏ việc phải định nghĩa các API riêng để xử lý hành động server-side.
- Được tối ưu để chỉ chạy trên server, không bị leak sang client.

```javascript
// app/actions.ts
"use server";

export async function addProduct(data: { name: string, price: number }) {
  console.log("Product added:", data);
  // Thực hiện logic, ví dụ lưu vào database
  return { message: "Product added successfully!" };
}

// Gọi trong Component

// app/page.tsx
import { addProduct } from "./actions";

export default function HomePage() {
  const handleAddProduct = async () => {
    const response = await addProduct({ name: "New Shoe", price: 100 });
    console.log(response);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}
```

## Streaming trong nextjs

`Next.js` sẽ tự động `stream` các phần tử đã sẵn sàng đến trình duyệt mà không cần chờ toàn bộ `component` được render xong.

```javascript
// app/page.tsx
export default async function Home() {
  return (
    <div>
      <h1>Welcome to Streaming</h1>
      <SlowComponent />
    </div>
  );
}

async function SlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Giả lập xử lý chậm
  return <p>This content was loaded after 3 seconds!</p>;
}

// kết hợp với Suspense:

import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Streaming in Next.js</h1>
      <Suspense fallback={<p>Loading slow content...</p>}>
        <SlowServerComponent />
      </Suspense>
    </div>
  );
}

async function SlowServerComponent() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Giả lập xử lý chậm
  return <p>This content was loaded after 3 seconds!</p>;
}

```

## paralled data fetching trong nextjs (Lấy dữ liệu song song)

Các yêu cầu dữ liệu được thực hiện đồng thời, không phụ thuộc lẫn nhau. Điều này giúp giảm thời gian chờ tổng thể vì tất cả các yêu cầu được xử lý cùng lúc.

```javascript

// app/page.tsx
import { Suspense } from 'react';
import Users from './components/Users';
import Posts from './components/Posts';

export default function Page() {
  return (
    <div>
      <h1>Parallel Data Fetching</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Suspense fallback={<p>Loading users...</p>}>
          <Users />
        </Suspense>
        <Suspense fallback={<p>Loading posts...</p>}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
}

// app/components/Users.tsx
export default async function Users() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

// app/components/Posts.tsx
export default async function Posts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}


```

## Sequential Data Fetching (Lấy dữ liệu tuần tự)

Các yêu cầu dữ liệu được thực hiện theo thứ tự. Dữ liệu từ yêu cầu trước có thể được sử dụng làm `input` cho yêu cầu sau.

```javascript
// app/page.tsx
export default async function Page() {
  // Fetch user data
  const resUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await resUsers.json();

  // Fetch posts using the first user's ID
  const resPosts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
  );
  const posts = await resPosts.json();

  return (
    <div>
      <h1>Sequential Data Fetching</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Posts by {users[0].name}</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Rendering trong nextjs

### 1: server component

#### 1.1: Static Rendering (trên server)

Khái niệm
Static Rendering (SSG - Static Site Generation) cho Server Components trong Next.js cho phép bạn tạo ra HTML tĩnh trong quá trình build. Điều này giúp cải thiện hiệu suất và tối ưu SEO vì nội dung được render trước và lưu trữ trên CDN hoặc server.

Cách hoạt động
Next.js sẽ pre-render các trang ở thời điểm build.
HTML được tạo ra sẽ được tái sử dụng cho mỗi request, giúp giảm tải công việc trên server trong quá trình runtime.
Các dữ liệu động không được sử dụng hoặc chỉ sử dụng những dữ liệu có thể được xác định tại thời điểm build.

#### 1.2: Dynamic Rendering (trên server)

**Khái niệm:**
-Dynamic Rendering trong Next.js là quá trình xử lý và render trang trên server mỗi khi có yêu cầu (request). Điều này đảm bảo rằng dữ liệu luôn được cập nhật theo thời gian thực. Trong App Router (app/), Dynamic Rendering là mặc định khi bạn không sử dụng bất kỳ cơ chế caching nào hoặc bạn chỉ định cache: 'no-store'.

**Cách hoạt động:**
-Server Components:

    Mặc định trong App Router, các tệp .js/.jsx/.tsx trong app/ là Server Components, nghĩa là chúng được render trên server và gửi HTML tĩnh về client.

-Fetch dữ liệu theo yêu cầu:

    -Khi sử dụng fetch hoặc bất kỳ truy vấn dữ liệu nào, bạn có thể kiểm soát cách cache thông qua:

        cache: 'no-store' (không lưu cache, luôn fetch mới).
        revalidate: X (lưu cache và làm mới sau X giây).

-Không lưu cache (Dynamic Rendering):

    -Dữ liệu được lấy và render lại từ đầu trên mỗi request.

    -Thích hợp cho dữ liệu cần cập nhật theo thời gian thực (ví dụ: thông tin người dùng, dashboard).

-Routing động (dynamic routes):

    -Các URL động được định nghĩa qua thư mục động [param] trong App Router (app/[param]/page.js).

    -Kết hợp với Dynamic Rendering để xử lý các tham số thay đổi.

### 2: Client component

**Khái niệm:**

-Client Component trong Next.js là các thành phần React được render trên client, nghĩa là chúng được tải lên trình duyệt và chạy bằng JavaScript. Các component này thường dùng cho:

Tương tác động (event handling, state management).
Giao diện phụ thuộc vào hành động người dùng.

**Cách hoạt động:**
Tách biệt giữa Server và Client Component:

-Để chuyển thành Client Component, bạn cần thêm dòng khai báo "use client" ở đầu file.
Quy trình render:

-Server: Next.js gửi HTML tĩnh ban đầu của trang (có thể rỗng).
-Client: Trình duyệt tải JavaScript để render và quản lý trạng thái, tương tác.

-Tương tác trên client:

-Các Client Component có thể sử dụng React hooks như `useState`, `useEffect`, và quản lý `DOM` trực tiếp.
-Chúng chỉ hoạt động sau khi hydration (kết hợp `HTML` tĩnh và `JavaScript`) hoàn tất.

## Request Memoization

**Khái niệm:**
Request Memoization là cơ chế lưu trữ (cache) kết quả của các request hoặc xử lý dữ liệu trong một khoảng thời gian, nhằm giảm số lần truy cập tài nguyên hoặc thực thi logic không cần thiết. Điều này giúp tối ưu hóa hiệu suất và tốc độ khi render các trang hoặc component trong Next.js.

**Cách hoạt động trong App Router:**
1:Cache Dữ Liệu:

-Next.js sử dụng cơ chế tự động caching request thông qua các tùy chọn như fetch API được tích hợp sẵn.
-Mặc định, các request thực hiện qua fetch sẽ được lưu trữ và sử dụng lại nếu không có thay đổi.

2:Memoization Custom:

-Memoization được thực hiện thông qua các thư viện như lru-cache, hoặc các cơ chế caching khác (Redis, Memory Cache, ...) để lưu dữ liệu giữa các lần gọi request.

3:Kết hợp Server và Client:

-Memoization thường được áp dụng tại các Server Components để lưu trữ và giảm tải server, sau đó chuyển dữ liệu sang Client Components nếu cần thiết.
