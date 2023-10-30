import axios from "axios";

async function getData(id) {
	try {
		const [user, post] = await Promise.all([
			axios.get("https://jsonplaceholder.typicode.com/users/" + id),
			axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + id),
		]);
		const userData = user.data; // Kullanıcının bilgilerini al
		const userPosts = post.data; // Kullanıcının post'larını al

// Yeni bir nesne oluştur ve kullanıcı bilgilerini ve post'ları içine yerleştir
const combinedData = {
  ...userData, // Kullanıcının bilgileri
  posts: userPosts, // Kullanıcının post'ları
};

console.log(combinedData);

	} catch (error) {
		console.error(error);
	}
}

export { getData };
