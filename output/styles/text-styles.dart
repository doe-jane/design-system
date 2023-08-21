
import 'dart:ui';

class TextStyles {
    TextStyles._();

    static const String _inter = 'Inter';
    static const String _numans = 'Numans';

    static const TextStyle bodyL = TextStyle(
      fontFamily: _inter,
      fontSize: 14.00,
      fontStyle: FontStyle.normal,
      fontWeight: FontWeight.w600,
      height: 20.00,
    );
    static const TextStyle heading2 = TextStyle(
      fontFamily: _inter,
      fontSize: 24.00,
      fontStyle: FontStyle.normal,
      fontWeight: FontWeight.w600,
      height: 32.00,
    );
    static const TextStyle subtitle = TextStyle(
      fontFamily: _inter,
      fontSize: 18.00,
      fontStyle: FontStyle.normal,
      fontWeight: FontWeight.w500,
      height: 32.00,
    );
    static const TextStyle heading1 = TextStyle(
      fontFamily: _inter,
      fontSize: 32.00,
      fontStyle: FontStyle.normal,
      fontWeight: FontWeight.w600,
      height: 40.00,
    );
    static const TextStyle bodyS = TextStyle(
      fontFamily: _inter,
      fontSize: 14.00,
      fontStyle: FontStyle.normal,
      fontWeight: FontWeight.w400,
      height: 20.00,
    );
    static const TextStyle section = TextStyle(
      fontFamily: _inter,
      fontSize: 12.00,
      fontStyle: FontStyle.normal,
      fontWeight: FontWeight.w600,
      letterSpacing: 0.50,
      height: 20.00,
    );
    static const TextStyle bodyM = TextStyle(
      fontFamily: _inter,
      fontSize: 14.00,
      fontStyle: FontStyle.normal,
      fontWeight: FontWeight.w500,
      height: 20.00,
    );
    static const TextStyle code = TextStyle(
      fontFamily: _numans,
      fontSize: 14.00,
      fontStyle: FontStyle.normal,
      fontWeight: FontWeight.w400,
      height: 20.00,
    );
}