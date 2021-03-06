Команды CD и CHDIR используется для просмотра или изменения пути текущего каталога .

Формат командной строки:

CHDIR [/D][диск:][путь]

CD [/D][диск:][путь]

CHDIR [..]

CD [..]

Команда CD диск: отображает имя текущего каталога указанного диска.

Команда CD без параметров отображает имена текущих диска и каталога.

Параметр /D используется для одновременной смены текущих диска и каталога.

Изменение команды CHDIR при включении расширенной обработки команд:

Имя текущего каталога в строке вызова преобразуется к тому же регистру символов, что и для существующих имен на диске. Так, команда CD C:\TEMP или cd c:\temp на самом деле сделает текущим каталог C:\Temp, если он существует на диске.

Команда CHDIR перестает рассматривать пробелы как разделители, что позволяет перейти в подкаталог, имя которого содержит пробелы, не заключая все имя каталога в кавычки. Например:

chdir \windows\users\username\programs\start menu

приводит к тому же результату, что и:

cd "\windows\users\username\programs\start menu"

При отключении расширенной обработки команд нужно использовать путь, заключенный в двойные кавычки.

Примеры использования:

CD /D X:\data - сделать текущим каталог data на диске X: . Результат использование ключа /D зависит от версии команды. Для того чтобы сменить текущий каталог, на каталог, размещенный на другом диске, надежнее использовать последовательность команд смены текущего диска и смены каталога:

X: - сделать текущим диском диск X:
CD X:\DATA - сделать текущим каталогом X:\DATA

CD %WINDIR% - сделать текущим каталогом каталог, каталог, задаваемый значением переменной среды %WINDIR% (каталог Windows) . При использовании переменных, желательно их имена заключать в двойные кавычки, поскольку принимаемые значения могут содержать пробелы:
CD "%TEMP%"

CD C:\ - перейти в корневой каталог диска C: . Если в параметре команды задан путь без указания диска, по предполагается, что переход выполняется в каталог, расположенный относительно текущего на данный момент времени :

CD system32 - перейти в каталог system32, являющийся подкаталогом текущего каталога

CD .. - если вместо имени каталога заданы две точки, то будет выполнен переход в родительский каталог ( на один уровень вверх).
