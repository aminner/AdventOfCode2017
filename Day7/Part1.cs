using System;
using System.IO;

namespace Day7
{
    class Program
    {
        Regex regex = /([()]|(->)|[,])|\s/
        static void Main(string[] args)
        {
            FileStream fileStream = new FileStream("file.txt", FileMode.Open);
            using (StreamReader reader = new StreamReader(fileStream))
            {
                string line = " ";
                while( (line = reader.ReadLine() != null)
                {
                    var parsedElements = Regex.Split(line, regex);

                }
            }       
        } 
    }
}
