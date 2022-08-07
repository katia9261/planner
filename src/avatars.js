const topStyles = [
	'NoHair',
	'Eyepatch',
	'Hat',
	'Hijab',
	'Turban',
	'WinterHat1',
	'WinterHat2',
	'WinterHat3',
	'WinterHat4',
	'LongHairBigHair',
	'LongHairBob',
	'LongHairBun',
	'LongHairCurly',
	'LongHairCurvy',
	'LongHairDreads',
	'LongHairFrida',
	'LongHairFro',
	'LongHairFroBand',
	'LongHairNotTooLong',
	'LongHairShavedSides',
	'LongHairMiaWallace',
	'LongHairStraight',
	'LongHairStraight2',
	'LongHairStraightStrand',
	'ShortHairDreads01',
	'ShortHairDreads02',
	'ShortHairFrizzle',
	'ShortHairShaggyMullet',
	'ShortHairShortCurly',
	'ShortHairShortFlat',
	'ShortHairShortRound',
	'ShortHairShortWaved',
	'ShortHairSides',
	'ShortHairTheCaesar',
	'ShortHairTheCaesarSidePart',
];
const accessoriesTypes = [
	'Blank',
	'Kurt',
	'Prescription01',
	'Prescription02',
	'Round',
	'Sunglasses',
	'Wayfarer',
];
const facialHairTypes = [
	'Blank',
	'BeardMedium',
	'BeardLight',
	'BeardMajestic',
	'MoustacheFancy',
	'MoustacheMagnum',
];
const clotheTypes = [
	'BlazerShirt',
	'BlazerSweater',
	'CollarSweater',
	'GraphicShirt',
	'Hoodie',
	'Overall',
	'ShirtCrewNeck',
	'ShirtScoopNeck',
	'ShirtVNeck',
];
const clotheColors = [
	'Black',
	'Blue01',
	'Blue02',
	'Blue03',
	'Gray01',
	'Gray02',
	'Heather',
	'PastelBlue',
	'PastelGreen',
	'PastelOrange',
	'PastelRed',
	'PastelYellow',
	'Pink',
	'Red',
	'White',
];
const eyeTypes = [
	'Close',
	'Cry',
	'Default',
	'Dizzy',
	'EyeRoll',
	'Happy',
	'Hearts',
	'Side',
	'Squint',
	'Surprised',
	'Wink',
	'WinkWacky',
];
const eyebrowTypes = [
	'Angry',
	'AngryNatural',
	'Default',
	'DefaultNatural',
	'FlatNatural',
	'RaisedExcited',
	'RaisedExcitedNatural',
	'SadConcerned',
	'SadConcernedNatural',
	'UnibrowNatural',
	'UpDown',
	'UpDownNatural',
];
const mouthTypes = [
	'Concerned',
	'Default',
	'Disbelief',
	'Eating',
	'Grimace',
	'Sad',
	'ScreamOpen',
	'Serious',
	'Smile',
	'Tongue',
	'Twinkle',
	'Vomit',
];
const skinColors = ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black'];

const hairColors = ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'PastelPink', 'Blue', 'Platinum', 'Red', 'SilverGray'];

export function randomAvatar () {
	Array.prototype.random = function () {
		return this[Math.floor((Math.random()*this.length))];
	}
	const topType = topStyles.random();
	const accessoriesType = accessoriesTypes.random();
	const facialHairType = facialHairTypes.random();
	const clotheType = clotheTypes.random();
	const clotheColor = clotheColors.random();
	const eyeType = eyeTypes.random();
	const eyebrowType = eyebrowTypes.random();
	const mouthType = mouthTypes.random();
	const skinColor = skinColors.random();
	const hairColor = hairColors.random();


	return ({
		topType: topType,
		hairColor: hairColor,
		accessoriesType: accessoriesType,
		facialHairType: facialHairType,
		clotheType: clotheType,
		clotheColor: clotheColor,
		eyeType: eyeType,
		eyebrowType: eyebrowType,
		mouthType: mouthType,
		skinColor: skinColor,
	});
}