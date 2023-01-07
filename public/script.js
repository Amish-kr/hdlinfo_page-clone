try {
  const res = await fetch("/posts");
  const data = await res.json();

  const ele = document.getElementById("datas");

  let table = "";

  for (let i = 0; i < data.length; i++) {
    table += `<tr><td scope="row">${i + 1}</td><td>${
      data[i].name
    }</td><td>&#8377; ${data[i].last}</td><td>&#8377; ${data[i].buy}/&#8377; ${
      data[i].sell
    }</td><td>${data[i].volume}</td><td>${data[i].base_unit}</td>
  </tr>`;
  }

  ele.innerHTML = table;
} catch (e) {
  console.log(e);
}
