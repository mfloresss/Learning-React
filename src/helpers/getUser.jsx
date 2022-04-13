const getUser = async () => {
  const url = "https://randomuser.me/api/";
  const res = await fetch(url);
  const user = await res.json();

  return user;
};

export default getUser;
