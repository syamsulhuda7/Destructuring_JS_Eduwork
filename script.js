// Destructuring Array
const nama = ['andi', 'budi', 'caca', 'dodi', 'erik'];

const [a, b, c, ...d] = nama;
console.log(a, b, c, d);
console.log(a, b, c, ...d);


// Destructuring Object
const film = {
    judul: 'MARVEL',
    tahun: 2024,
    durasi: '2 jam',
    rating: 9.9,
    // kesan: 'sedih',
    plot: {
        lokasi: 'Indonesia',
        alur: 'maju',
        genre: 'action'
    }
}

const { judul, tahun, durasi, ...info } = film;
console.log(judul, tahun, durasi, info);

// Destructuring Function
function tayangFilm({ judul, tahun, durasi, plot: { genre } }) {
    const tes = `film ${judul} dibuat pada ${tahun} dengan durasi ${durasi} dan genrenya yaitu ${genre}`;
    console.log(tes);
}

tayangFilm(film);

// Default Value
function tayangFilm2({ judul, tahun, durasi, plot: { genre }, kesan = 'happy ending' }) {
    const tes = `film ${judul} dibuat pada ${tahun} dengan durasi ${durasi} dan genrenya yaitu ${genre} dan memiliki kesan ${kesan} `;
    console.log(tes);
}

tayangFilm2(film);


// Alias
function tayangFilm3({ judul: title, tahun, durasi, plot: { genre }, kesan = 'happy ending' }) {
    const tes = `film ${title} dibuat pada ${tahun} dengan durasi ${durasi} dan genrenya yaitu ${genre} dan memiliki kesan ${kesan} `;
    console.log(tes);
}

tayangFilm3(film);