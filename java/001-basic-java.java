
// 8 primitive type: LISB + BCDF
4 integers: long int short byte ( LISBon 里斯本Capital of Portugal)
2 decimal: float double ( BCDF )
1 char
1 boolean

byte: -2^7 ~ 2^(7-1)
short: -2^15 ~ 2 ^ (15-1)
int: -2^31 ~ 2^(31-1)
long: -2^63 ~ 2^(63-1)

int[] arr = {1, 2, 3};
int[] arr = new int[] {1, 2, 3};
int[] arr = new int [3];

if(){} else {}

int max = a > b? a: b;

switch() {
	case 1: code 1; break;
	case 2: code 2; break;
	default: code n;
}

for, foreach, while, do while;
for(var item:  list){}

break/ continue


0x7B // hexadecimal 123
0b11001 // binary of 0x19, JDK 7+

Integer.toBinaryString(a)
Integer.toHexString(a)



// string and char array
str.getChar()  // string to char array
new String (charArray) // char array to string


Charset.defaultCharset();

ASCII < ISO 8859-1(Latin-1) < Windows-1252
GB2312 < GBK < GB18030 // CN
BIG5 // TW, HK
UTF-32, UTF-16, UTF-8, (Big Endian, Little Endian)
UTF-16BE(Java)

// string and bytes (encode/decode)
string1.getBytes(charset) // encode: string to bytes
new String(bytes, charset) // decode: bytes to string
 Charset.forName("UTF-8");



========== File ========================================

// java.io.File
public File(String pathname)
public File(String parent, String child)
public File(File parent, String child)

getName
isAbsolute
getPath
getAbsolutePath, getAbsoluteFile // absolute File object
getCanonicalPath, getCanonicalFile
getParent, getParentFile // parent File object

// static separator
separator, separatorChar  // '\' for windows, '/' for linux
pathSeparator, pathSeparatorChar, // ';' for windows, ':' for linux
// file/directory basic info
exists
isDirectory
isFile
length
lastModified
setLastModified
// security info
isHidden
canExecute, canRead, canWrite
setReadable, setWritable, setExecutable

createNewFile
createTempFile
delete
deleteOnExit // mark and delete when VM quiting.
renameTo
//dir
makedir
makedirs
list
listFiles


//-------------- binary file----------------------------
InputStream, OutputStream // abstract base class, use as parameter
----read(), readAllBytes(),
----write(), close(), flush()

FileInputStream, FileOutputStream // source/target is file
----getChannel() FileChannel, getFD() FileDescriptor

ByteArrayInputStream, ByteArrayOutputStream // source/target is byte array
----toByteArray(), toString(charset), writeTo(OutputStream)

FilterInputStream, FilterOutputStream // decorator pattern

DataInputStream, DataOutputStream  // decorator, inherite from filter stream
----writeBoolean() // write 1 byte, 1 fro true, 0 for false
----writeInt()
----writeUTF // UTF-8
----readBoolean, readInt, readUTF

BufferedInputStream, BufferedOutputStream // decorator
----size, default 8192

var output = new(DataOutputStream( new BufferedOutputStream( new FileOutputStream("1.txt") ) ) );

//-------------- text file----------------------------
encoding or charset: ANSI, UTF-16BE(Java), UTF-8, GB18030
Reader, Writer // abstract base class, most of the case use as parameter
----read(), write()

InputStreamReader, OutputStreamWriter // adapter pattern, convert binary stream to character/string
---- Charset, default is  Charset.defaultCharset();

FileReader( extends InputStreamReader), FileWriter( extends OutputStreamWriter) // source/target is file
---- FileReader​(String fileName, Charset charset)   // JDK 11+

CharArrayReader, CharArrayWriter // source/target is char array
----writer: toCharArray(), toString()

StringReader, StringWriter  // source is String, target is StringBuffer

BufferedReader, BufferedWriter // decorator
---- reader.readLine()
---- writer.newLine() 

PrintWriter, PrintStream // decorator
---- print(), printf() // more convenient than FileWriter

System.in: InputStream
System.out:  PrintStream
System.err:  PrintStream

Scanner
---- useDelimiter(",")
---- next(), nextInt/Float, nextLine

 
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

// Apache Commons CSV (Comma-Separated Values)
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

// Apache Commons Compress
java.util.zip.
GZIPOutputStream, GZIPInputStream  // decorator
ZIPOutputStream, ZIPInputStream
---- getNextEntry()
---- putNextEntry( ZIPEntry )

RandomAccessFile (implements DataInput/DataOutput)
---- getFilePointer(), seek(pos), skipBytes(), length(), setLength()
---- writeBytes(string), readLine() // charset is messy, not suitable for Chinese

// list or array to string like [1,2,3]

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

