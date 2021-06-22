import { nanoid } from 'nanoid';
import { IBook } from '../types';

class Api {
  private books: IBook[] = [
    {
      id: nanoid(),
      name: 'Новая большая книга CSS',
      description: `Технология CSS3 позволяет создавать профессионально оформленные сайты, но тонкости этого языка могут оказаться довольно сложными даже для опытных веб-разработчиков. Веб-дизайнеры, как начинающие, так и опытные, при помощи этой книги быстро научатся создавать красивые веб-страницы, которые молниеносно загружаются как на ПК, так и на мобильные устройства.`,
      year: 2016
    },
    {
      id: nanoid(),
      name: 'Мартин Иден',
      description: `"Мартин Иден" - самый известный роман Джека Лондона, впервые напечатанный в 1908-1909 гг. Во многом автобиографическая книга о человеке, который "сделал себя сам", выбравшись из самых низов, добился признания. Любовь к девушке из высшего общества побуждает героя заняться самообразованием. Он становится писателем, но все издательства отказывают ему в публикации. И как это часто бывает в жизни, пройдя сквозь лишения и унижения, получив отказ от любимой девушки, он наконец становится знаменитым. Но ни слава, ни деньги, ни успех, ни даже возвращение его возлюбленной не могут уберечь Мартина от разочарования в этой насквозь фальшивой жизни.`,
      year: 1909
    },
    {
      id: nanoid(),
      name: 'Алхимик',
      description: `"Алхимик" - самый известный роман бразильского писателя Пауло Коэльо, любимая книга миллионов людей во всем мире. В юности люди не боятся мечтать, все кажется им возможным. Но проходит время, и таинственная сила принимается им внушать, что их желания неосуществимы. "Добиться воплощения своей Судьбы - вот единственная подлинная обязанность человека...", - утверждает Пауло Коэльо. Этот ставший культовым роман-притча способен изменить жизнь своих читателей.`,
      year: 1988
    },
    {
      id: nanoid(),
      name: 'Метро 2033',
      description: `2033 год. Весь мир лежит в руинах. Человечество почти полностью уничтожено. Москва превратилась в город-призрак, отравленный радиацией и населённый чудовищами. Немногие выжившие люди прячутся в московском метро - самом большом противоатомном бомбоубежище на земле. Его станции превратились в города-государства, а в туннелях царит тьма и обитает ужас. Артему, жителю ВДНХ, предстоит пройти через все метро, чтобы спасти от страшной опасности свою станцию, а может быть, и всё человечество. Культовый сетевой роман Дмитрия Глуховского уже известен ста тысячам интернет-пользователей. Выхода этой книги ждали все.`,
      year: 2005
    },
    {
      id: nanoid(),
      name: 'Война и мир',
      description: `Величайшая эпопея, снискавшая славу во всем мире. Сотни героев, застигнутых безжалостным потоком времени, и сотни судеб, перемолотых масштабными историческими событиями. Сменяются поколения и эпохи, а чтение "Войны и мира" по-прежнему дарит нам восторг познания простых и сложных жизненных истин. Мы все так же находим себя в Наташе Ростовой, Андрее Болконском, Пьере Безухове, все так же, подобно им, хотим жить, любить и верить наперекор войне – с неприятелем ли, с обстоятельствами или с самими собой.`,
      year: 1863
    },
  ];

  getAllBooks() {
    return this.books;
  }

  getBook(id: string) {
    return this.books.find((book) => book.id === id);
  }

  deleteBook(id: string) {
    const bookIndex = this.books.findIndex((book) => book.id === id);

    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
    }
  }

  addBook(book: Omit<IBook, 'id'>) {
    const newBook = {
      id: nanoid(),
      ...book
    };

    this.books.push(newBook);
  }
}

export default new Api();
