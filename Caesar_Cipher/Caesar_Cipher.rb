require 'pry'
puts "Enter your message: "
message = gets.chomp
puts "Enter your encryption number: "
number = gets.chomp.to_i

def caesar_cipher(text_input, key)
    a_to_z = ("a".."z").to_a
    dor = ("A".."Z").to_a
    result = ""
    text_input.each_char do |char|
        if a_to_z.index(char) == nil
            if dor.index(char) == nil
                result += char
            else
                result += dor[(dor.index(char) + key) % 26]
            end          
        else
        	result += a_to_z[(a_to_z.index(char) + key) % 26]
        end
        binding.pry
    end
    result
end

puts caesar_cipher(message, number)
