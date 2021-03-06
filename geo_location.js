// var content= `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: bold">` + response.body + `</p>`;

  var url = "https://api.ip.sb/geoip"
  var opts = {
      policy: $environment.params
  };
  var myRequest = {
      url: url,
      opts: opts,
      timeout: 4000
  };
 
  var message = ""
  const paras = ["ip","isp","country_code","city"]
  const paran = ["IP","ISP","ĺĺŽś","ĺĺ¸"]
  $task.fetch(myRequest).then(response => {
    message = response? json2info(response.body,paras) : ""
      $done({"title": "    đ IP.SB ćĽčŠ˘çľć", "htmlMessage": message});
  }, reason => {
    message = "</br></br>đ ćĽčŠ˘čść"
    message = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: bold;">` + message + `</p>`
      $done({"title": "đ IP.SB ćĽčŠ˘çľć", "htmlMessage": message});
  })


function json2info(cnt,paras) {
  var res = "------------------------------"
  cnt =JSON.parse(cnt)
  for (i=0;i<paras.length;i++) {
    cnt[paras[i]] = paras[i] == "country_code"? cnt[paras[i]]+" âŚ"+flags.get(cnt[paras[i]].toUpperCase())+"â§":cnt[paras[i]]
    res = cnt[paras[i]]?   res +"</br><b>"+ "<font  color=>" +paran[i] + "</font> : " + "</b>"+ "<font  color=>"+cnt[paras[i]] +"</font></br>" : res
  }
  res =res+ "------------------------------"+"</br>"+"<font color=#6959CD>"+"<b>çŻéť</b> â " + $environment.params+ "</font>"
  res =  `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + res + `</p>`
  return res
}


var flags = new Map([[ "AC" , "đŚđ¨" ] ,["AE","đŚđŞ"], [ "AF" , "đŚđŤ" ] , [ "AI" , "đŚđŽ" ] , [ "AL" , "đŚđą" ] , [ "AM" , "đŚđ˛" ] , [ "AQ" , "đŚđś" ] , [ "AR" , "đŚđˇ" ] , [ "AS" , "đŚđ¸" ] , [ "AT" , "đŚđš" ] , [ "AU" , "đŚđş" ] , [ "AW" , "đŚđź" ] , [ "AX" , "đŚđ˝" ] , [ "AZ" , "đŚđż" ] , ["BA", "đ§đŚ"], [ "BB" , "đ§đ§" ] , [ "BD" , "đ§đŠ" ] , [ "BE" , "đ§đŞ" ] , [ "BF" , "đ§đŤ" ] , [ "BG" , "đ§đŹ" ] , [ "BH" , "đ§đ­" ] , [ "BI" , "đ§đŽ" ] , [ "BJ" , "đ§đŻ" ] , [ "BM" , "đ§đ˛" ] , [ "BN" , "đ§đł" ] , [ "BO" , "đ§đ´" ] , [ "BR" , "đ§đˇ" ] , [ "BS" , "đ§đ¸" ] , [ "BT" , "đ§đš" ] , [ "BV" , "đ§đť" ] , [ "BW" , "đ§đź" ] , [ "BY" , "đ§đž" ] , [ "BZ" , "đ§đż" ] , [ "CA" , "đ¨đŚ" ] , [ "CF" , "đ¨đŤ" ] , [ "CH" , "đ¨đ­" ] , [ "CK" , "đ¨đ°" ] , [ "CL" , "đ¨đą" ] , [ "CM" , "đ¨đ˛" ] , [ "CN" , "đ¨đł" ] , [ "CO" , "đ¨đ´" ] , [ "CP" , "đ¨đľ" ] , [ "CR" , "đ¨đˇ" ] , [ "CU" , "đ¨đş" ] , [ "CV" , "đ¨đť" ] , [ "CW" , "đ¨đź" ] , [ "CX" , "đ¨đ˝" ] , [ "CY" , "đ¨đž" ] , [ "CZ" , "đ¨đż" ] , [ "DE" , "đŠđŞ" ] , [ "DG" , "đŠđŹ" ] , [ "DJ" , "đŠđŻ" ] , [ "DK" , "đŠđ°" ] , [ "DM" , "đŠđ˛" ] , [ "DO" , "đŠđ´" ] , [ "DZ" , "đŠđż" ] , [ "EA" , "đŞđŚ" ] , [ "EC" , "đŞđ¨" ] , [ "EE" , "đŞđŞ" ] , [ "EG" , "đŞđŹ" ] , [ "EH" , "đŞđ­" ] , [ "ER" , "đŞđˇ" ] , [ "ES" , "đŞđ¸" ] , [ "ET" , "đŞđš" ] , [ "EU" , "đŞđş" ] , [ "FI" , "đŤđŽ" ] , [ "FJ" , "đŤđŻ" ] , [ "FK" , "đŤđ°" ] , [ "FM" , "đŤđ˛" ] , [ "FO" , "đŤđ´" ] , [ "FR" , "đŤđˇ" ] , [ "GA" , "đŹđŚ" ] , [ "GB" , "đŹđ§" ] , [ "HK" , "đ­đ°" ] ,["HU","đ­đş"], [ "ID" , "đŽđŠ" ] , [ "IE" , "đŽđŞ" ] , [ "IL" , "đŽđą" ] , [ "IM" , "đŽđ˛" ] , [ "IN" , "đŽđł" ] , [ "IS" , "đŽđ¸" ] , [ "IT" , "đŽđš" ] , [ "JP" , "đŻđľ" ] , [ "KR" , "đ°đˇ" ] , [ "LU" , "đąđş" ] , [ "MO" , "đ˛đ´" ] , [ "MX" , "đ˛đ˝" ] , [ "MY" , "đ˛đž" ] , [ "NL" , "đłđą" ] , [ "PH" , "đľđ­" ] , [ "RO" , "đˇđ´" ] , [ "RS" , "đˇđ¸" ] , [ "RU" , "đˇđş" ] , [ "RW" , "đˇđź" ] , [ "SA" , "đ¸đŚ" ] , [ "SB" , "đ¸đ§" ] , [ "SC" , "đ¸đ¨" ] , [ "SD" , "đ¸đŠ" ] , [ "SE" , "đ¸đŞ" ] , [ "SG" , "đ¸đŹ" ] , [ "TH" , "đšđ­" ] , [ "TN" , "đšđł" ] , [ "TO" , "đšđ´" ] , [ "TR" , "đšđˇ" ] , [ "TV" , "đšđť" ] , [ "TW" , "đšđź" ] , [ "UK" , "đŹđ§" ] , [ "UM" , "đşđ˛" ] , [ "US" , "đşđ¸" ] , [ "UY" , "đşđž" ] , [ "UZ" , "đşđż" ] , [ "VA" , "đťđŚ" ] , [ "VE" , "đťđŞ" ] , [ "VG" , "đťđŹ" ] , [ "VI" , "đťđŽ" ] , [ "VN" , "đťđł" ] , [ "ZA" , "đżđŚ"]])
