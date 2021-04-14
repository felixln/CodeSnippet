
 Charset.forName("UTF-8");
 
 public static boolean saveFile(String fileName, String content, Charset charset)
    {
        try(var writer = new FileWriter(fileName, charset)) {
            writer.write(content);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

  public static String readFileString(String file, Charset charset)
    {
        String res = null;

        try {
            var in = new FileInputStream(file);
            var bytes = in.readAllBytes();

            res = new String(bytes, charset);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return res;

    }

// Apache Commons CSV
// https://commons.apache.org/proper/commons-csv/
	public static void saveCSV(List<Book> books)
    {
        try (CSVPrinter printer = new CSVPrinter(new FileWriter("d:\\1.csv"), CSVFormat.EXCEL)) {
			// printer.printRecord("Title", "ISBN", "Info");
            for(var book: books)
            {
                printer.printRecord(book.getTitle(), book.getIsbn(), book.getInfo());
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

// jsoup: Java HTML Parser
// https://jsoup.org/
Document  doc = Jsoup.connect(url).get();
OAHelper.saveFile("d:\\1.txt", doc.outerHtml());
Elements newsHeadlines = doc.select("#mp-itn b a");
elem.select("td:nth-child(1) a").attr("href")
elem.select("td:nth-child(3)").text()



// list or array to string

  public <T> String toStr(T[] array)
    {
        if (array == null) return "[]";

        return toStr(Arrays.asList(array));
    }

    public <T> String toStr(Iterable<T> ite)
    {
        String s = "[";

        if(ite!=null) {
            var it = ite.iterator();

            while (it.hasNext()) {
                if (s != "[") s += ",";
                s += it.next();
            }
        }

        s += "]";

        return s;

    }

