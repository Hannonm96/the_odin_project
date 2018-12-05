#Project 1, Caesar Cipher
def caesar_cipher (str, shift)
    out_str = str.split("")
    out_str.map! do |ele|
        if (97..122) === ele.ord
            if ele.ord + shift <= 122
                ele = (ele.ord + shift).chr
            else ele = (96 + ele.ord + shift - 122).chr
            end
        elsif (65..90) === ele.ord
            if ele.ord + shift <= 90
                ele = (ele.ord + shift).chr
            else ele = (64 + ele.ord + shift - 90).chr
            end
        else ele
        end
    end
    out_str.join("")
end

puts caesar_cipher("What a string!", 5)