export function useChangeCase(str) 
{
	var firstChar = str.charAt(0);
	var restChar = str.substring(1);
	var sentence = firstChar.toUpperCase() + restChar.toLowerCase();
	return sentence;
}
