class PagesController < ApplicationController
  def info
  end
  
  def game
    
  end
  
  def locale_en
    render json: {
  "BUTTON_LANG_EN" => "English",
  "BUTTON_LANG_PT" => "Portuguese",
  "gameSubmitButton" => "Submit",
  "recognize" => "Recognize",
  "playerName" => "Insert Player Name:",
  "welcome" => "Welcome,",
  "invitation" => "Let's learn a new language?",
  "pressButton" => "Press the button below.",
  "instructions" => "Click this button and then say the name of this image in Italian! (Permit mic use)",
  "result" => "Your result will apppear in this box!",
  "hintButton" => "Hint",
  "Pronounciation" => "Pronounciation:"
}
  end
  
  def locale_pt
    render json:   {
  "BUTTON_LANG_EN"=> "Inglês",
  "BUTTON_LANG_PT"=> "Português",
  "gameSubmitButton"=> "Enviar",
  "recognize"=> "Reconhecer",
  "playerName"=>"Insira o nome do jogador=>",
  "welcome"=> "Bem vindo,",
  "invitation"=> "Vamos aprender uma nova língua?",
  "pressButton"=> "Aperte o botão abaixo.",
  "instructions"=> "Aperta este botão e fale o nome da imagem em italiano! (Permita o uso de microfone)",
  "result"=> "Seu resultado na caixinha abaixo!",
  "hintButton"=> "Dica",
   "Pronounciation"=> "Pronúncia"
}
  end
end
